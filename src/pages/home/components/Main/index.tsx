import { EffectCallback, memo, useEffect } from "react";
import { useStore } from "pages/home/context/store";
import { useModel } from "apis/useModels";
import useDebounce from "hooks/useDebounce";

import ProductList from "../Products";

import { buildQueryString } from "helpers/helpers";
import { LIMIT_PRODUCT_LIST } from "pages/home/context/constants";

import "./styles.css";

function Main() {
  const { state, dispatch, actions } = useStore();
  const { query, isLoadingProducts, productList, total_records, searchKey } =
    state;

  const { products } = useModel();
  const debouncedValue = useDebounce<string>(searchKey, 500);

  const { getProducts, getProductsByKeyword } = products;

  const { limit, page } = query;

  const useEffectFetchDataProduct = (effect: EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useEffect(effect, [page]);
  };

  useEffectFetchDataProduct(() => {
    handleProducts();
  });

  useEffect(() => {
    handleSearchProducts(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleProducts = async () => {
    dispatch(actions.fetchingProducts());

    const queryString = buildQueryString({
      limit,
      skip: (page - 1) * LIMIT_PRODUCT_LIST,
    });
    const { data, isError } = await getProducts(queryString);
    if (isError) {
      dispatch(actions.fetchingProductsError());
    } else {
      if (productList?.length) {
        // summary data
        const oldProducts = productList.concat(data.products);

        dispatch(
          actions.fetchingProductsSuccess({
            products: oldProducts,
            total: data.total,
          })
        );
      } else {
        dispatch(actions.fetchingProductsSuccess(data));
      }
    }
  };

  const handleQueriesSkip = (page: number) => {
    const currentQuery = { ...query };
    const newQuery = {
      ...currentQuery,
      page,
    };

    dispatch(actions.setQuery(newQuery));
  };

  const handleSearchProducts = async (keyword: string) => {
    const { data, isError } = await getProductsByKeyword(keyword);
    if (isError) {
      dispatch(actions.fetchingProductsError());
    } else {
      dispatch(actions.fetchingProductsSuccess(data));
      dispatch(
        actions.setQuery({
          ...query,
          page: 1,
        })
      );
    }
  };

  return (
    <div>
      <div className="panel-wrapper">
        <h2 className="panel-wrapper__title">Danh sách sản phẩm</h2>

        <input
          className="panel-wrapper__input"
          onChange={(e) => {
            dispatch(actions.setSearchKey(e.target.value));
          }}
          value={searchKey}
        />
      </div>

      <ProductList
        data={productList}
        total={total_records}
        isLoading={isLoadingProducts}
        onBottomScroll={handleQueriesSkip}
        query={query}
      />
    </div>
  );
}

export default memo(Main);

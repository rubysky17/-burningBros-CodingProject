import { Fragment } from "react";

import ProductCard from "../ProductCard";
import Loading from "components/Loading";

import "./styles.css";

function ProductList(props: any) {
  const { data, isLoading, total, onBottomScroll, query } = props;

  const { page, limit } = query;

  const handleInfinityScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (isLoading || !isAtBottom(event)) return;

    if (total > page * limit) {
      onBottomScroll && onBottomScroll(page + 1);
    }
  };

  const isAtBottom = ({
    currentTarget,
  }: React.UIEvent<HTMLDivElement>): boolean => {
    return (
      currentTarget.scrollTop >=
      currentTarget.scrollHeight - currentTarget.clientHeight
    );
  };

  return (
    <div
      style={{
        height: "90vh",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
      }}
      onScroll={handleInfinityScroll}
    >
      <>
        {data?.length ? (
          <div className="card-row">
            {data.map((card: any, idx: any) => {
              return (
                <Fragment key={idx}>
                  <ProductCard card={card} />
                </Fragment>
              );
            })}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
            }}
          >
            Danh sách sản phẩm trống
          </p>
        )}

        <>
          {data?.length && isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            ""
          )}
        </>
      </>
    </div>
  );
}

export default ProductList;

import { lazy, Suspense } from "react";

interface ILazyLoad {
  cb: any;
  fallback?: any;
}

const defaultProps = {
  cb: () => {},
  fallback: null,
};

// Initial component Loadable
const Loadable = (Component: any, fallback: any) => (props: any) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export const LazyLoad = ({ cb, fallback = null }: ILazyLoad) => {
  return Loadable(lazy(cb), fallback);
};

LazyLoad.defaultProps = defaultProps;

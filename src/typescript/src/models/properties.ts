import { ReactNodeLike } from "prop-types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DefaultProps<T = any> {
  children?: ReactNodeLike;
  pageContext?: T;
}

import { useState } from "react";

interface IProps {
  url: string;
}

interface IState {
  loading: boolean;
}

const useFetch = ({ url }: IProps) => {
  const [loading, setLoading] = useState<IState["loading"]>(false);

  const state = {};
  return {
    state,
  };
};

export default useFetch;

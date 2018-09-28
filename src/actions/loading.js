import {setLoading} from './types';

export const setLoadingStatus = status => ({
  type: setLoading,
  payload: status
});
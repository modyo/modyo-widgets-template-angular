import ApiClient from './clients/ApiClient';

const ApiRepository = {
  summary(): Promise<unknown> {
    return ApiClient.get('summary');
  },
};

export default ApiRepository;

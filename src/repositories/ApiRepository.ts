import ApiClient from './clients/ApiClient';

const ApiRepository = {
  summary(): Promise<any> {
    return ApiClient.get('summary');
  },
};

export default ApiRepository;

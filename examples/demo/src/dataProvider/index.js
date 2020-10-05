import Providers from "./providers";
import api from "./api";

const providers = new Providers({ api });

const dataProvider = {
  getList: async (resource, params) => {
    return providers.list({ resource, params });
  },
  getOne: async (resource, params) => {
    return providers.get({ resource, params });
  },
  //   getMany: async (resource, params) => {},
  //   getManyReference: async (resource, params) => {},
  create: async (resource, params) => {
    return providers.create({ resource, params });
  },
  update: async (resource, params) => {
    return providers.update({ resource, params });
  },
  //   updateMany: async (resource, params) => {},
  delete: async (resource, params) => {
    return providers.delete({ resource, params });
  },
  //   deleteMany: async (resource, params) => {},
};

export default dataProvider;

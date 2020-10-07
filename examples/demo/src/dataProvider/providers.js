const Providers = function Providers({ api }) {
  this.api = api;
  this.cache = {};
};

Providers.prototype.list = async function list({ resource, params = {} }) {
  if (!this.cache["list"]) {
    this.cache["list"] = {};
  }

  if (!this.cache["list"][resource]) {
    this.cache["list"][resource] = await this.api(`/${resource}`);
  }

  const { limit = 10, page = 0 } = params;
  return this.cache["list"][resource].slice(limit * page, limit);
};

Providers.prototype.get = function get({ resource, params }) {
  const { id } = params;
  return this.api(`/${resource}/${id}`);
};

Providers.prototype.create = function create({ resource, params }) {
  return this.api(`/${resource}`, { body: params.data });
};

Providers.prototype.update = function update({ resource, params }) {
  const { previousData } = params;
  const { id } = previousData;
  return this.api(`/${resource}/${id}`, { body: params.data, method: "PUT" });
};

Providers.prototype.delete = function del({ resource, params }) {
  const { previousData } = params;
  const { id } = previousData;
  return this.api(`/${resource}/${id}`, { method: "DELETE" });
};

export default Providers;

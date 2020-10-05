const Providers = function Providers({ api }) {
  this.api = api;
};

Providers.prototype.list = function list({ resource }) {
  return this.api(`/${resource}`);
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

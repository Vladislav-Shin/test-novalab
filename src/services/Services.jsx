import { useHttp } from "../hooks/http.hook";

const useService = () => {
  const { request, process, setProcess } = useHttp();
  const _apiBase = "https://reqres.in/api";

  const getAllUsers = async () => {
    const res = await request(`${_apiBase}/users`);
    return res.data.map(_transformUsers)
  };
  
  const getUser = async (id) => {
    const res = await request(`${_apiBase}/users/${id}`);
    return _transformUsers(res.data)
  };

  const getAllUnknown = async () => {
    const res = await request(`${_apiBase}/unknown`);
    return res.data.map(_transformUnknown)
  };

  const changeUsers = async (id, data) => {
    const res = await request(`${_apiBase}/users/${id}`, "PUT", JSON.stringify(data));
    return res;
  }


  const registrationUser = async (body) => {
    const json = JSON.stringify(body);
    return await request('https://reqres.in/api/register', 'POST', json);
  }

  const logInUser = async (body) => {
    const json = JSON.stringify(body);
    return await request('https://reqres.in/api/login', 'POST', json);
  }

  const _transformUsers = (users) => {
    return {
      id: users.id,
      name: users.first_name,
      last_name: users.last_name,
      email: users.email,
      img: users.avatar,
    };
  };

  const _transformUnknown = (item) => {
    return {
      id: item.id,
      name: item.name,
      year: item.year,
      color: item.color,
      value: item.p0antone_value,
    };
  };

  return {
    getAllUsers,
    getUser,
    getAllUnknown,
    changeUsers,
    registrationUser,
    logInUser,
    process,
    setProcess
  };
};

export default useService;

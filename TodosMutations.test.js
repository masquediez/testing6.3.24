const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserId: 1 }
    );
  });
});

test("Test PUT markTodo Function", async () => {
  const mockData = {
    data: { updatedTodo: returnedTodo1 },
  };
  axios.put.mockResolvedValue(mockData);
  const result = await TodosMutations.markTodo(6, true);

  expect(result).toEqual(mockData.data.updatedTodo);
  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith(
    "http://localhost:5050/v1/todos/mark",
    { todoId: 6, newIsDone: true }
  );
});

test("Test PUT updateTodo Function", async () => {
  const mockData = {
    data: { updatedTodo: returnedTodo1 },
  };
  axios.put.mockResolvedValue(mockData);
  const myDate = new Date();
  const result = await TodosMutations.updateTodo(6, "Essen", true, myDate);

  expect(result).toEqual(mockData.data.updatedTodo);
  expect(axios.put).toHaveBeenCalledTimes(2);
  expect(axios.put).toHaveBeenCalledWith(
    "http://localhost:5050/v1/todos/update",
    { todoId: 6, newTask: "Essen", newIsDone: true, newDueDate: myDate }
  );
});

test("Test DELETE deleteTodo Function", async () => {
  const mockData = {
    data: { deletedTodosId: 6 },
  };
  axios.delete.mockResolvedValue(mockData);
  const result = await TodosMutations.deleteTodo(6);

  expect(result).toEqual(mockData.data.deletedTodosId);
  expect(axios.delete).toHaveBeenCalledTimes(1);
  expect(axios.delete).toHaveBeenCalledWith(
    "http://localhost:5050/v1/todos/delete",
    { data: { todoId: 6 } }
  );
});

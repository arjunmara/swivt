import axios from "axios";

export const getUsers = async (req, res) => {
  const { text } = req.body;
  try {
    const data = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    res.status(200).json(data.data.items);
  } catch (error) {
    console.log(error);
  }
};
export const getUserDetails = async (req, res) => {
  const { username } = req.body;
  try {
    const data = await axios.get(
      `https://api.github.com/users/${req.params.username}`
    );
    res.status(200).json(data.data);
  } catch (error) {
    console.log(error);
  }
};

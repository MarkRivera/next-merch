import { data } from "../../db/data/database";

export default function handleSocialData(req, res) {
  res.status(200).json(data);
}

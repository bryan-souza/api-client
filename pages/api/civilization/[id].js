import axios from 'axios';

function civilizationHandler(req, res) {
  const { id } = req.query;

  axios({
    method: 'GET',
    baseURL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilization',
    url: id,
    headers: {'accept': 'application/json'}
  })
  .then(({ data }) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500);
  });
}

export default civilizationHandler;
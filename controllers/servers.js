let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Google Cloud', status: 'working'},
    {id: '3', name: 'Yandex Cloud', status: 'working'},
    {id: '4', name: 'Microsoft', status: 'pending'}
  ]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    console.log(req.body)
    res.statuc(201).json({})
}
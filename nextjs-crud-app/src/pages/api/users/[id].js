// pages/api/users/[id].js

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
  
  export default function handler(req, res) {
    const { method } = req;
    const { id } = req.query;
  
    let userIndex = users.findIndex(user => user.id === parseInt(id));
  
    switch (method) {
      case 'GET':
        // ユーザーのデータを返す
        if (userIndex > -1) {
          res.status(200).json(users[userIndex]);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
        break;
      case 'PUT':
        // ユーザーのデータを更新
        if (userIndex > -1) {
          const { name, email } = req.body;
          users[userIndex] = { ...users[userIndex], name, email };
          res.status(200).json(users[userIndex]);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
        break;
      case 'DELETE':
        // ユーザーを削除
        if (userIndex > -1) {
          users = users.filter(user => user.id !== parseInt(id));
          res.status(200).json({ message: 'User deleted' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  
// pages/api/users/index.js

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
  
  export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        // 全ユーザーのデータを返す
        res.status(200).json(users);
        break;
      case 'POST':
        // 新しいユーザーを作成
        const { name, email } = req.body;
        const newUser = { id: Date.now(), name, email };
        users.push(newUser);
        res.status(201).json(newUser);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  
export const resolvers = {
    Query: {
        users: () => {
        return [
          {
            first_name: 'Taro',
            last_name: 'Test',
            role: 'TEST',
          },
        ]
      },
    },
  }

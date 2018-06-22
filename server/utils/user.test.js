const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Shawon',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jebin',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Sijan',
            room: 'Node Course'
        }];
    });

    it('Should Add new user', () =>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Shawon',
            room: 'The lol Fans'
        };
        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        expect(res).toEqual(user);
    });

    it('Should return names for Node course', () => {
         var userList = users.getUserList('Node Course');

         expect(userList).toEqual(['Shawon', 'Sijan']);
         expect(userList.length).toBe(2);
         
    });

    it('Should return names for React course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jebin']);
        expect(userList.length).toBe(1);
   });

    it('Should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '100';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId); 
    });

    it('should not find user', () => {
        var userId = '100';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

});
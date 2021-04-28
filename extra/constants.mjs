const Constants= Object.freeze({
    Permissions:{
        'getUsers': {
            all: ['head-trainer'],
            read: ['trainee', 'trainer'],
            write: ['trainer'],
            delete: [],
        }
    },
    users: [
        {
            traineeEmail: 'trainee1@successive.tech',
            reviewerEmail: 'reviewer1@successive.tech',
        }
    ],
});

export default Constants;
const userProfile = {
    userName: 'Yulia',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({ userName, commentsQty }) => {
    if (!commentsQty) {
        return `User ${userName} has no comments`;
    }
    return `User ${userName} has ${commentsQty} comments`;
};

userInfo(userProfile);

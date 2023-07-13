const validateFieldTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined || 'title' in body) {
        res.status(400).json({ errorMessage: 'The field title is required' });
    }

    if (body.title === '') {
        res.status(400).json({ errorMessage: 'Title cannot be empty' });
    }

    next();
};

const validateFieldStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined || 'status' in body) {
        res.status(400).json({ errorMessage: 'The field status is required' });
    }

    if (body.status === '') {
        res.status(400).json({ errorMessage: 'Status cannot be empty' });
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus
};
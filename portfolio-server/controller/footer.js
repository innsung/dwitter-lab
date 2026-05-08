import * as respository from '../repository/footer.js';

/**
 * 
 */

export const getFooter = (req, res, next) => {
    const footer = respository.getFooter();
    res.json({"result": footer});
}
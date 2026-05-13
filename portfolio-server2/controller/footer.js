import * as respository from '../repository/footer.js';

export const getFooter = async (req, res, next) => {
    const footer = await respository.getFooter();
    res.json({"result": footer});
}
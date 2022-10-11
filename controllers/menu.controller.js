const catchAsync = require('../utils/catchAsync');
const services  = require('../services')

const addMenu = catchAsync(async (req, res) => {
    const result  = await services.menuService.addMenu(req);
    res.send(result);
});

const updateMenu = catchAsync(async (req, res) => {
    const result  = await services.menuService.updateMenu(req);
    res.send(result);
});

const deleteMenu = catchAsync(async (req, res) => {
    const result  = await services.menuService.deleteMenu(req);
    res.send(result);
});

module.exports = {
    addMenu,
    updateMenu,
    deleteMenu
}
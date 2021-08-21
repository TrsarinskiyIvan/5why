const FiveWhy = require('../models/FiveWhy');

module.exports = async (req, res) => {

    const whyList = await FiveWhy.find({});

    let mechanical = 0;
    let electrical = 0;
    let control = 0;
    let materials = 0;
    let expirience = 0;

    let quality = 0;
    let cost = 0;
    let delivery = 0;
    let moral = 0;

    let shift1 = 0;
    let shift2 = 0;
    let shift3 = 0;
    let shift4 = 0;


    for (let i = 0; i < whyList.length; i++) {
        switch (whyList[i].reason) {
            case 'Механика': {
                mechanical++;
                break;
            }
            case 'Электрика': {
                electrical++;
                break;
            }
            case 'Контроль': {
                control++;
                break;
            }
            case 'Сырье': {
                materials++;
                break;
            }
            case 'Навыки': {
                expirience++;
                break;
            }
        }
        switch (whyList[i].qcdm) {
            case 'quality': {
                quality++;
                break;
            }
            case 'cost': {
                cost++;
                break;
            }
            case 'delivery': {
                delivery++;
                break;
            }
            case 'moral': {
                moral++;
                break;
            }
        }

        switch (whyList[i].numberShift) {
            case 1: {
                shift1++;
                break;
            }
            case 2: {
                shift2++;
                break;
            }
            case 3: {
                shift3++;
                break;
            }
            case 4: {
                shift4++;
                break;
            }
        }
    }

    res.json({ mechanical, electrical, control, materials, expirience, quality, cost, delivery, moral, shift1, shift2, shift3, shift4 });
}
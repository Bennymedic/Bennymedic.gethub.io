//This closure exercise involves a common real-world scenario.
export function createShoppingCart() {
    let items = [];
    return {
        addItem: function (item, price) {
            items.push({ item: item, price: price });
        },
        removeItem: function (item) {
            const index = items.findIndex((i) => i.item === item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        getTotal: function () {
            return items.reduce((total, item) => total + item.price, 0);
        },
    };
}

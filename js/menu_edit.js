const form = document.getElementById("editMenuForm");
form.addEventListener('submit', async (e) => {
    const itemGroupsContainer = document.getElementById("itemGroupsContainer");
    const i = itemGroupsContainer.childElementCount;
    e.preventDefault();

    const name = document.getElementById("name").value;
    const category_id = document.getElementById("category_id").value;
    const price = document.getElementById("price").value;
    const items=[
        {
            inventory_item_id: document.getElementById(`inventory_item_id`).value,
            quantity: document.getElementById(`quantity`).value,
            unit_id: document.getElementById('unit_id').value,
            cost: document.getElementById(`cost`).value
        }
    ];
    for (let x=0; x<i; x++) {
        const inventory_item_id = document.getElementById(`inventory_item_id${x}`).value;
        const quantity = document.getElementById(`quantity${x}`).value;
        const unit_id = document.getElementById(`unit_id${x}`).value;
        const cost = document.getElementById(`cost${x}`).value;

        items.push({
            inventory_item_id: inventory_item_id,
            quantity: quantity,
            unit_id: unit_id,
            cost: cost
        });
    }

    const menu = { name: name, category_id: category_id, price: price };
    const action = document.getElementById("action").value;

    const id = document.getElementById("menu_item_id").textContent;
    const response = await fetch(`/menu/edit/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menu, action, items })
    });
    window.location.href = "/menu";
});
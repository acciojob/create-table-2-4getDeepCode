function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Check numeric values
    if (rn === null || cn === null || rn.trim() === "" || cn.trim() === "") {
        return;
    }

    const rows = Number(rn);
    const columns = Number(cn);

    // Invalid / negative / zero values
    if (!Number.isInteger(rows) || !Number.isInteger(columns)) {
        return;
    }

    if (rows <= 0 || columns <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    const table = document.getElementById("myTable");

    // Clear existing table
    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();

        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
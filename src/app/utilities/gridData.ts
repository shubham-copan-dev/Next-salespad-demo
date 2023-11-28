const rowData = [
    { make: "Toyota", model: "Celica", price: 35000, year: 2022, color: "Blue" },
    { make: "Ford", model: "Mondeo", price: 32000, year: 2021, color: "Red" },
    { make: "Porsche", model: "Boxster", price: 72000, year: 2023, color: "Black" },
    { make: "Honda", model: "Civic", price: 28000, year: 2022, color: "Silver" },
    { make: "Chevrolet", model: "Malibu", price: 30000, year: 2020, color: "White" },
    { make: "BMW", model: "X5", price: 55000, year: 2023, color: "Grey" },
    { make: "Audi", model: "A4", price: 42000, year: 2022, color: "Green" },
    { make: "Tesla", model: "Model S", price: 80000, year: 2023, color: "Silver" },
    { make: "Mercedes-Benz", model: "C-Class", price: 48000, year: 2021, color: "Black" },
    { make: "Subaru", model: "Outback", price: 35000, year: 2022, color: "Green" },
    { make: "Volkswagen", model: "Golf", price: 27000, year: 2020, color: "Blue" },
    { make: "Volvo", model: "XC60", price: 45000, year: 2023, color: "White" },
    { make: "Lexus", model: "RX", price: 52000, year: 2022, color: "Red" },
    { make: "Hyundai", model: "Elantra", price: 25000, year: 2021, color: "Grey" },
    { make: "Kia", model: "Soul", price: 22000, year: 2020, color: "Yellow" },
    { make: "Mazda", model: "CX-5", price: 38000, year: 2022, color: "Silver" },
  ];
  
  
  const columnDefs = [
    { headerName: "Make", field: "make", sortable: true, filter: true },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true },
    { headerName: "Year", field: "year", sortable: true, filter: true },
    { headerName: "Color", field: "color", sortable: true, filter: true },
  ];

  export {rowData,columnDefs}
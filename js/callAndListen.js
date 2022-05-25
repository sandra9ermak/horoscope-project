const callButton = document.querySelector(".callAndListen__button");
const tableDataKey = document.querySelector(".tableDataKey");
const tableDataValue = document.querySelector(".tableDataValue");

callButton.addEventListener("click", async () => {
  fetch("https://swapi.dev/api/people/1/")
    .then((response) => response.json())
    .then((posts) => markupTable(posts))
    .catch((error) => console.log(error));
});

const markupTable = (data) => {
  console.log(data);
  //   const render = `<th>${data.name}</th>
  //   <th>${data.birth_year}</th>
  //   <th>${data.created}</th>
  //   <th>${data.edited}</th>
  //   <th>${data.eye_color}</th>
  //   <th>${data.gender}</th>
  //   <th>${data.hair_color}</th>
  //   <th>${data.height}</th>
  //   <th>${data.homeworld}</th>
  //   <th>${data.mass}</th>
  //   <th>${data.gender}</th>
  //   <th>${data.gender}</th>
  //   <th>${data.gender}</th>
  //   <th>${data.gender}</th>
  //   <th>${data.gender}</th>`;

  // const renderKey = Object.entries(data).map(([key, value]) => {
  //   return `<th>${key}</th>`;
  // });

  // const renderValue = Object.entries(data).map(([key, value]) => {
  //   return `<td>${value}</td>`;
  // });

  // tableDataKey.innerHTML = renderKey;
  // tableDataValue.innerHTML = renderValue;

  const table = document.getElementById("table");

  const render = Object.entries(data)
    .map(([key, value]) => {
      return `<tr class="table_line">
    <th class="table_title">${key}:</th>
    <td class="table_value">${value}</td>
    </tr>`;
    })
    .join("");

  table.innerHTML = render;
  table.classList.add("table");
};

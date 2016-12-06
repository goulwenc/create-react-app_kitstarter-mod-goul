import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("Restos did mount");
  },

  render() {

    var restos = [
      {
        id: "1",
        name: "Le Septime"
      },
      {
        id: "2",
        name: "Chez Momo"
      },
      {
        id: "3",
        name: "Couscous Déli"
      },
      {
        id: "4",
        name: "Le Rey"
      }
    ];

    var listRestos = restos.map((resto) =>
      <li key={resto.id}>
        {resto.name}
      </li>
    );

    console.log(listRestos);

    return (
      <div>
        <h2>Restos</h2>
        <ul>
          {listRestos}
        </ul>
      </div>
    )
  }
})

<template>
  <footer>
    <address>
      <i><strong>Autor:</strong>Skenshee Augustin</i><br />
      <i><strong>Tel:</strong>+1 849-255-3917</i><br />
      <i><strong>Direccion:</strong>Santo Domigo Republica Dominicana</i><br />

      <i
        ><strong
          >Desarrollador Full-Stack de Node Js, SQL, BASS(Firebase), NOSQL,
          Angular, Vue Js.</strong
        ></i
      ><br />
      <i
        ><strong
          >No duden en contactarme para hacer su sueño de tener una tienda
          virtual una realidad.</strong
        ></i
      ><br />
      <i><strong>Ayuda a tus clientes a ahorrar compustible.</strong></i
      ><br />
    </address>
    <nav>
      <ul>
        <li><i class="fa-brands fa-google"></i></li>
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-linkedin"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
        <li><i class="fa-solid fa-envelope"></i></li>
      </ul>
    </nav>
    <p>©Skenshee Augustin</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #1a6488;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
footer > * {
  margin: 15px;
}
nav {
  width: 100%;
}
ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
li{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


}
i{
    font-size: 20px;
}
li:hover{
    background: blue;
    border: 1px solid white;
   color: white;
   cursor: pointer;
}
</style>

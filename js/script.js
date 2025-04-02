
//La información se ordena alfabéticamente(el método `sort`)
//pasa los nombres a mayúsculas 
//Al clickar en cada una de las banderas tendrá que mostrar la información detallada en una ventana flotante
//incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.
//car.side / capital / name / population
//"https://flagcdn.com/w320/gi.png" (bandera)




const countriesList = document.getElementById("countries-list");
const btnCierre = document.getElementById("btn-cierre");
const ventanaFlotante = document.getElementById("ventana-flotante")

document.addEventListener("DOMContentLoaded", async () => {
try {
    const response = await fetch("https://restcountries.com/v3/all")
        if(!response.ok) {
            throw new Error("Error")
        }
        const data = await response.json();
    // ordenar alfabeticamente
        data.sort((a, b) => a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase()));
    
        //contenedor paises
        data.forEach(country => {
            const countryElement = document.createElement("div");
            countryElement.classList.add("country");
            
        //img bandera    
            const flagImg = document.createElement("img");
            flagImg.src = `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`;
            flagImg.alt = `Bandera de ${country.name.common}`;
         //nombre pais   
            const name = document.createElement("h3");
            name.textContent = country.name.common;
         //lado conduccion   
            const drivers = document.createElement("p");
            drivers.textContent = `Lado de conducción: ${country.car.side}`;
            
            console.log(countryElement.appendChild(flagImg));
            console.log(countryElement.appendChild(name));
            console.log(countryElement.appendChild(drivers));
            console.log(countriesList.appendChild(countryElement));
        

       countryElement.addEventListener("click", () => {
        ventanaFlotante.innerHTML = `
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}" alt="Bandera de ${country.name.common}" style="width: 100px;">
                <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "Desconocida"}</p>
                <p><strong>Población:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Circulación:</strong> ${country.car.side === "right" ? "Derecha" : "Izquierda"}</p>
            `;
            ventana.style.display = "block";
        });
    });
    
    btnCierre.addEventListener("click", () => {
        ventanaFlotante.style.display = "none";
    });
} catch (error) {
    console.error("Error al obtener los datos:", error);
    }
});    

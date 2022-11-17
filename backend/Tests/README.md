# Pruebas unitarias

<h3 align=center>Para las pruebas unitarias se utilizaron las dependencias de mocha y chai</h3> 
<p align=center>
   
  </br>
  </br>
<img src="https://user-images.githubusercontent.com/75387331/202316736-ec003219-5e64-48aa-85e7-92246e46f707.png" width=500px  align=center>
</p>
</br>  

## Descripcion de pruebas  

<h3 margin=10pxr>Durante las pruebas se checaron los endpoints donde se vieron sobre los metodos de post y get</h3> 
<p>
  Fueron un total de 16 pruebas unitarias</br>
  Durante las pruebas se llegaron a pasar todas dandonos resultados del alta y register junto con los códigos de error y que se llegasen a validar los jsonwebtoken para que el
  usuario pueda autentificarse.
</p>  
   </br>
<p align=center>  
<img width="668" alt="Captura de Pantalla 2022-11-16 a la(s) 17 52 35" src="https://user-images.githubusercontent.com/75387331/202320069-f3660f3d-f5d4-443b-a1d3-7991acd5b5b2.png">
</p>  
</br>  
Como dato adicional, si se desean hacer otras pruebas es necesario modificar la de post register ya que el usuario que esta en la actual, ya existe, 
en un futuro se planea añadir una ruta de delete para que pueda funcionar en conjunto con esa prueba y para que el usuario pueda dar de baja su cuenta.  
  
---  
### Para correr las pruebas en la carpeta de backend con cualquiera de las dos formas 
</br>
  
  
```
npm test
```
### ó  
</br>  
  
```  
mocha ./Tests/*.js --exit
```

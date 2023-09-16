
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>Interfaz de usuario</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/win7.scoped.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"./components/theme.css\" />\n    <script src=\"./components/calo.js\"></script>\n    <script src=\"./components/utilidades.js\"></script>\n    <script src=\"./components/PuertoDeNotificaciones.component.js\"></script>\n    <script src=\"./components/BreadcrumbGenerico.component.js\"></script>\n    <script src=\"./components/PaginaDeInicio.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeAdministracion.component.js\"></script>\n    <script src=\"./components/PaginaDePanelDeConfiguraciones.component.js\"></script>\n    <script src=\"./components/PaginaDeLogin.component.js\"></script>\n    <script src=\"./components/PaginaDeExploradorDeDatosDeTabla.component.js\"></script>\n    <script src=\"./components/PaginaDeImportarExportarDatos.component.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.ExploradorDeDatos = Castelog.metodos.un_componente_vue2("ExploradorDeDatos",
  "<div class=\"ExploradorDeDatos Component\">"
 + "    <div v-if=\"esSeleccionable !== '0'\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td class=\"w_100\">"
 + "              <input class=\"w_100\" type=\"text\" disabled=\"true\" v-model=\"seleccionados\" />"
 + "            </td>"
 + "            <td class=\"w_auto\">"
 + "              <button class=\"w_auto\" :class=\"{active:esta_mostrando_panel_normal}\" v-on:click=\"alternar_panel_normal\">⋯</button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "    <div v-if=\"(esSeleccionable === '0') || esta_mostrando_panel_normal\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <button v-if=\"esSeleccionable === '0'\" class=\"w_auto\" v-on:click=\"ir_a_crear_fila\">✚</button>"
 + "            </td>"
 + "            <td class=\"w_100\">"
 + "              <div class=\"searchbox w_100\">"
 + "                <input class=\"w_100\" type=\"search\" placeholder=\"Buscar\" v-model=\"busqueda\" />"
 + "                <button aria-label=\"search\" v-on:click=\"buscar_texto\"></button>"
 + "              </div>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"w_auto\" :class=\"{active:esta_mostrando_panel_de_busqueda_avanzada}\" v-on:click=\"alternar_panel_de_busqueda_avanzada\">⋮</button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "      <div v-if=\"esta_mostrando_panel_de_busqueda_avanzada\">"
 + "        <section class=\"tabs\">"
 + "          <menu role=\"tablist\" aria-label=\"Tabs Template\">"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'filtros'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('filtros')\">Ⴤ Filtros</button>"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'orden'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('orden')\">↓ Orden</button>"
 + "            <button role=\"tab\" :aria-selected=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'paginacion'\" v-on:click=\"() => seleccionar_panel_de_busqueda_avanzada_sobre('paginacion')\">🗒 Página</button>"
 + "          </menu>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'filtros'\">"
 + "            <h5>Ⴤ Filtros</h5>"
 + "            <div>"
 + "              <div>"
 + "                <button v-on:click=\"agregar_filtro\">✚ Añadir</button>"
 + "              </div>"
 + "              <div>"
 + "                <div class=\"filtro_del_explorador\" v-for=\"filtro, filtro_index in filtros\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index\">"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <select v-model=\"filtro[0]\">"
 + "                      <option v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index + '-opcion-columna-' + id_columna_index\" :value=\"id_columna\">"
 + "                        {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <select v-model=\"filtro[1]\">"
 + "                      <option v-for=\"operador, operador_index in operadores_de_filtro\" v-bind:key=\"'busqueda-de-' + tabla_id + '-filtro-' + filtro_index + '-opcion-columna-' + operador_index\" :value=\"operador\">"
 + "                        {{ operador }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <input type=\"text\" v-model=\"filtro[2]\" />"
 + "                  </span>"
 + "                  <span class=\"campo_del_filtro\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => { filtros.splice(filtro_index, 1); $forceUpdate(true); }\">Eliminar</button>"
 + "                  </span>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'orden'\">"
 + "            <h5>↓ Orden</h5>"
 + "            <div>"
 + "              <div>"
 + "                <button v-on:click=\"agregar_orden\">✚ Añadir</button>"
 + "              </div>"
 + "              <div>"
 + "                <div class=\"orden_del_explorador\" v-for=\"orden, orden_index in ordenes\" v-bind:key=\"'busqueda-de-' + tabla_id + '-orden-' + orden_index\">"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <select v-model=\"orden[0]\">"
 + "                      <option v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-orden-' + orden_index + '-opcion-columna-' + id_columna_index\" :value=\"id_columna\">"
 + "                        {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                      </option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <select v-model=\"orden[1]\">"
 + "                      <option value=\"ASC\">ascendente</option>"
 + "                      <option value=\"DESC\">descendente</option>"
 + "                    </select>"
 + "                  </span>"
 + "                  <span class=\"campo_del_orden\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => { ordenes.splice(orden_index, 1); $forceUpdate(true); }\">Eliminar</button>"
 + "                  </span>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_mostrando_panel_de_busqueda_avanzada_sobre === 'paginacion'\">"
 + "            <h5>🗒 Paginación</h5>"
 + "            <div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <div>Página:</div>"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <input type=\"number\" v-model=\"pagina\" v-on:keypress.enter=\"buscar_pagina\" />"
 + "                </span>"
 + "              </div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <div>Ítems:</div>"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <input type=\"number\" v-model=\"items\" v-on:keypress.enter=\"buscar_pagina\" />"
 + "                </span>"
 + "              </div>"
 + "              <div class=\"paginacion_del_explorador\">"
 + "                <span class=\"campo_de_la_paginacion\">"
 + "                  <button class=\"w_100\" v-on:click=\"buscar_pagina\">Ir a página</button>"
 + "                </span>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "        </section>"
 + "      </div>"
 + "      <div v-if=\"Array.isArray(filas) && filas.length\">"
 + "        <div class=\"paginacion alta\">"
 + "          <div class=\"display_inline_block\">"
 + "            <table>"
 + "              <tbody>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('««')\">"
 + "                    ««"
 + "                    </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('«')\">"
 + "                    «"
 + "                    </button>"
 + "                  </td>"
 + "                  <td class=\"w_auto\">"
 + "                    Pág. {{ pagina_actual }}"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"filas && (filas.length < items)\" v-on:click=\"buscar_pagina('»')\">"
 + "                    »"
 + "                    </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </tbody>"
 + "            </table>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"visor_de_tabla\">"
 + "          <table class=\"w_100\">"
 + "            <thead>"
 + "              <tr>"
 + "                <th v-if=\"esSeleccionable !== '0'\"></th>"
 + "                <th v-for=\"id_columna, id_columna_index in columnas_de_fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-columna-' + id_columna_index\">"
 + "                  {{ $window.utilidades.texto_humanizado(id_columna) }}"
 + "                </th>"
 + "              </tr>"
 + "            </thead>"
 + "            <tbody>"
 + "              <tr v-for=\"fila, fila_index in filas\" v-bind:key=\"'busqueda-de-' + tabla_id + '-fila-' + fila_index\">"
 + "                <td v-if=\"esSeleccionable !== '0'\" style=\"vertical-align: middle;\">"
 + "                  <span style=\"vertical-align: middle;\">"
 + "                    <button class=\"w_auto\" v-on:click=\"() => seleccionar_fila(fila.id)\">"
 + "                      <span v-if=\"esta_fila_seleccionada(fila.id)\">"
 + "                        ✔"
 + "                      </span>"
 + "                      <span v-else>"
 + "                        ✘"
 + "                      </span>"
 + "                    </button>"
 + "                  </span>"
 + "                </td>"
 + "                <td v-for=\"columna, columna_index in fila\" v-bind:key=\"'busqueda-de-' + tabla_id + '-fila-' + fila_index + '-columna-' + columna_index\">"
 + "                  <span v-if=\"(columna_index === 'id') && (esSeleccionable === '0')\">"
 + "                    <button v-on:click=\"() => ir_a_fila(columna)\">"
 + "                      {{ columna }}"
 + "                    </button>"
 + "                  </span>"
 + "                  <span v-else>{{ columna }}</span>"
 + "                </td>"
 + "                <td class=\"w_100\">"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "        <div class=\"paginacion baja\">"
 + "          <div class=\"display_inline_block\">"
 + "            <table>"
 + "              <tbody>"
 + "                <tr>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('««')\">"
 + "                    ««"
 + "                    </button>"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"pagina_actual === 1\" v-on:click=\"buscar_pagina('«')\">"
 + "                    «"
 + "                    </button>"
 + "                  </td>"
 + "                  <td class=\"w_auto\">"
 + "                    Pág. {{ pagina_actual }}"
 + "                  </td>"
 + "                  <td>"
 + "                    <button class=\"w_auto\" :disabled=\"filas && (filas.length < items)\" v-on:click=\"buscar_pagina('»')\">"
 + "                    »"
 + "                    </button>"
 + "                  </td>"
 + "                </tr>"
 + "              </tbody>"
 + "            </table>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "      <div v-else-if=\"Array.isArray(filas)\">"
 + "        <span>No se obtuvieron resultados.</span>"
 + "        <span v-if=\"pagina !== 1\">"
 + "          <span>Puedes <span class=\"como_link\" v-on:click=\"ir_a_pagina_anterior\">volver a página anterior</span></span>"
 + "          <span> o </span>"
 + "          <span class=\"como_link\" v-on:click=\"ir_a_pagina_inicial\">volver a página inicial</span><span>.</span>"
 + "        </span>"
 + "      </div>"
 + "      <div v-else>"
 + "        No se ha hecho ninguna búsqueda."
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
esSeleccionable:{ type:String,
default:"0"
},
idDeTabla:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
seleccionPorDefecto:{ type:[ String,
Number ],
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
alCambiar:{ type:Function,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data(  ) {try {
return this.obtener_datos( { 
} );
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_filtro:function() {try {
this.filtros.push([ "",
"=",
"" ])
} catch(error) {
console.log(error);
throw error;
}

},
agregar_orden:function() {try {
this.ordenes.push([ "",
"ASC" ])
} catch(error) {
console.log(error);
throw error;
}

},
alternar_panel_de_busqueda_avanzada:function() {try {
this.esta_mostrando_panel_de_busqueda_avanzada = (!(this.esta_mostrando_panel_de_busqueda_avanzada));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_panel_normal:function() {try {
this.esta_mostrando_panel_normal = (!(this.esta_mostrando_panel_normal));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
buscar:async function() {try {
const respuesta_busqueda = (await Castelog.metodos.una_peticion_http("/api/v1/select/" + this.tabla_id, "POST", { search:this.busqueda,
where:JSON.stringify(this.filtros, null, 2),
order:JSON.stringify(this.ordenes, null, 2),
page:this.pagina,
items:this.items
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_busqueda,
this );
this.pagina_actual = this.pagina;
this.filas = respuesta_busqueda.data.resultado;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
buscar_pagina:function( pagina ) {try {
if(typeof pagina === 'number') {
this.pagina = pagina;
}
if(pagina === "««") {
this.pagina = 1;
}
if(pagina === "«") {
this.pagina -= 1;
}
if(pagina === "»") {
this.pagina += 1;
}
return this.buscar(  );
} catch(error) {
console.log(error);
throw error;
}

},
buscar_texto:function() {try {
this.pagina = 1;
return this.buscar(  );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_fila:function( index_fila ) {try {
this.$router.history.push( `/formulario/${this.tabla.tabla}/id/${index_fila}` );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_crear_fila:function(  ) {try {
this.$router.history.push( `/formulario/${this.tabla.tabla}/crear` );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_anterior:function(  ) {try {
this.pagina -= 1;
return this.buscar(  );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_inicial:function(  ) {try {
this.pagina = 1;
return this.buscar(  );
} catch(error) {
console.log(error);
throw error;
}

},
obtener_datos:function( base = { 
} ) {try {
return Object.assign(base, { seleccionados:( this.seleccionPorDefecto + "" ).split( "," ),
tabla:false,
tabla_id:this.idDeTabla || this.$route.params.id_de_tabla,
busqueda:"",
filtros:[  ],
ordenes:[  ],
pagina:1,
pagina_actual:1,
items:20,
esta_mostrando_panel_normal:false,
esta_mostrando_panel_de_busqueda_avanzada:false,
esta_mostrando_panel_de_busqueda_avanzada_sobre:"filtros",
filas:undefined,
columnas_de_fila:undefined,
operadores_de_filtro:[ "=",
"!=",
"<",
"<=",
">=",
">",
"IS NULL",
"IS NOT NULL",
"LIKE",
"NOT LIKE",
"IN",
"NOT IN" ]
} );
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_panel_de_busqueda_avanzada_sobre:function( subpanel ) {try {
this.esta_mostrando_panel_de_busqueda_avanzada_sobre = subpanel;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_fila:function( fila_id_num ) {try {
const fila_id = "" + fila_id_num;
const posicion = this.seleccionados.indexOf( fila_id );
if((!(posicion === 0 - 1))) {
this.seleccionados.splice( posicion,
1 );
}
else if(posicion === 0 - 1) {
const es_seleccionable_por_1 = this.esSeleccionable === "1";
if(es_seleccionable_por_1) {
const hay_uno_seleccionado = this.seleccionados.length > 0;
if(hay_uno_seleccionado) {
this.seleccionados = [  ];
}
}
this.seleccionados.push( fila_id );
}
this.alCambiar( this.seleccionados,
this );
} catch(error) {
console.log(error);
throw error;
}

},
esta_fila_seleccionada:function( fila_id ) {try {
const posicion = this.seleccionados.indexOf( "" + fila_id );
return (!(posicion === 0 - 1));
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ filas:function( nuevo_valor ) {try {
if(Array.isArray(nuevo_valor) && nuevo_valor.length) {
this.columnas_de_fila = Object.keys(nuevo_valor[ 0 ]);
}
} catch(error) {
console.log(error);
throw error;
}

}
},
async mounted() {try {
this.tabla = this.$window.utilidades.busco_tabla_en_esquema( this.root.esquema,
this.tabla_id );
(await this.buscar(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
window.PaginaDeFormularioDeDatoDeTabla = Castelog.metodos.un_componente_vue2("PaginaDeFormularioDeDatoDeTabla",
  "<div class=\"PaginaDeFormularioDeDatoDeTabla Component\">"
 + "    <div class=\"window\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">"
 + "          <table class=\"\">"
 + "            <tbody>"
 + "              <tr>"
 + "                <td>"
 + "                  <span class=\"partenon\" v-on:click=\"() => $router.history.push('/')\">🏛️</span>"
 + "                </td>"
 + "                <td>"
 + "                  <span>Formulario de tabla</span>"
 + "                </td>"
 + "              </tr>"
 + "            </tbody>"
 + "          </table>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <BreadcrumbGenerico :root=\"root\" :migas=\"[{texto:'Inicio',link:'/'},{texto:'Administración',link:'/administracion'},{texto:'Explorador',link:'/explorador/'+tabla_id}]\"></BreadcrumbGenerico>"
 + "        <h5>{{ $window.utilidades.texto_humanizado(tabla_id) }}: {{ $route.params.id_de_fila || \"nuevo\" }}</h5>"
 + "        <div v-if=\"fila\" style=\"padding: 4px; padding-top: 0px;\">"
 + "          <div class=\"\" v-for=\"columna, columna_index in fila\" v-bind:key=\"'formulario-columna-'+columna_index\">"
 + "            <div class=\"columna_del_formulario\">"
 + "              <div v-if=\"columna_index === 'id'\">"
 + "                <label>ID: <span>{{ columna }}</span></label>"
 + "              </div>"
 + "              <div v-else-if=\"columna_index in columnas_foraneas\">"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}:</div>"
 + "                <ExploradorDeDatos :root=\"root\" es-seleccionable=\"1\" :id-de-tabla=\"columnas_foraneas[columna_index].tabla_foranea\" :al-cambiar=\"v => fila[columna_index] = v[0]\" :seleccion-por-defecto=\"fila[columna_index]\" />"
 + "              </div>"
 + "              <div v-else-if=\"columna_index in columnas_fichero\">"
 + "                <form enctype=\"multipart/form-data\">"
 + "                  <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}:</div>"
 + "                  <input class=\"inputfile\" type=\"file\" v-on:change=\"evento => cambiar_fichero(columna_index, evento)\" />"
 + "                  <div v-if=\"columnas_fichero_cargando[columna_index] !== true\">"
 + "                    <img class=\"inputfileimage\" :src=\"'/api/v1/getfile/' + tabla_id + '/?columna=' + columna_index + '&id=' + fila.id + '&nocache=' + new Date()\"  v-on:click=\"() => refrescar_imagen(columna_index)\" />"
 + "                  </div>"
 + "                </form>"
 + "              </div>"
 + "              <div v-else>"
 + "                <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}:</div>"
 + "                <textarea v-model=\"fila[columna_index]\"></textarea>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"columna_del_formulario text_align_right\">"
 + "            <button v-on:click=\"eliminar_fila\">Eliminar</button>"
 + "            <button v-on:click=\"buscar_fila\">Cargar</button>"
 + "            <button v-on:click=\"guardar_fila\">Guardar</button>"
 + "          </div>"
 + "        </div>"
 + "        <div v-else-if=\"modalidad === 'crear'\" style=\"padding: 4px; padding-top: 0px;\">"
 + "          <div class=\"\" v-for=\"columna, columna_index in columnas_locales\" v-bind:key=\"'formulario-columna-'+columna_index\">"
 + "            <div class=\"columna_del_formulario\" v-if=\"columna_index !== 'id'\">"
 + "              <div>{{ $window.utilidades.texto_humanizado_de_columna(root.esquema, tabla_id, columna_index) }}:</div>"
 + "              <div v-if=\"columna_index in columnas_foraneas\">"
 + "                <ExploradorDeDatos :root=\"root\" es-seleccionable=\"1\" :id-de-tabla=\"columnas_foraneas[columna_index].tabla_foranea\" :al-cambiar=\"v => fila_nueva[columna_index] = v[0]\" />"
 + "              </div>"
 + "              <div v-else>"
 + "                <textarea v-model=\"fila_nueva[columna_index]\"></textarea>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "          <div class=\"columna_del_formulario text_align_right\" v-if=\"modalidad === 'crear'\">"
 + "            <button v-on:click=\"crear_fila\">Crear</button>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
modalidad:{ type:String,
default:function() {try {
return "editar";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data(  ) {try {
return { tabla:false,
tabla_id:this.$route.params.id_de_tabla,
fila:false,
fila_nueva:{ 
},
columnas_foraneas:{ 
},
columnas_locales:{ 
},
columnas_fichero:{ 
},
columnas_fichero_cargando:{ 
},
esta_cambiando_fichero:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async buscar_fila(  ) {try {
const respuesta_fila = (await Castelog.metodos.una_peticion_http(`/api/v1/select/${this.tabla_id}`, "POST", { where:JSON.stringify([ [ "id",
"=",
this.$route.params.id_de_fila ] ], null, 2)
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_fila,
this );
this.fila = respuesta_fila.data.resultado[ 0 ];
} catch(error) {
console.log(error);
throw error;
}

},
async guardar_fila(  ) {try {
const respuesta_guardar = (await Castelog.metodos.una_peticion_http(`/api/v1/update/${this.tabla_id}`, "POST", { id:this.$route.params.id_de_fila,

...(this.fila )
}, { authorization:this.root.token_de_sesion
}, null, null));
this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_guardar,
this );
(await this.buscar_fila(  ));
} catch(error) {
console.log(error);
throw error;
}

},
async crear_fila(  ) {try {
const respuesta_crear = (await Castelog.metodos.una_peticion_http(`/api/v1/insert/${this.tabla_id}`, "POST", { 
...(this.fila_nueva )
}, { authorization:this.root.token_de_sesion
}, null, null));
if((!(this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_crear,
this )))) {
this.$router.history.push( `/explorador/${this.tabla_id}` );
}
} catch(error) {
console.log(error);
throw error;
}

},
async eliminar_fila(  ) {try {
const respuesta_eliminar = (await Castelog.metodos.una_peticion_http(`/api/v1/delete/${this.tabla_id}`, "POST", { id:this.$route.params.id_de_fila
}, { authorization:this.root.token_de_sesion
}, null, null));
if((!(this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_eliminar,
this )))) {
this.$router.history.push( `/explorador/${this.tabla_id}` );
}
} catch(error) {
console.log(error);
throw error;
}

},
async cambiar_fichero( columna_index,
evento ) {try {
this.desactualizar_imagen( columna_index );
const datos_de_formulario = new FormData(  );
const ficheros_seleccionados = evento.target.files;
const [ fichero_seleccionado ] = ficheros_seleccionados;
datos_de_formulario.append( "id",
this.$route.params.id_de_fila );
datos_de_formulario.append( "columna",
columna_index );
datos_de_formulario.append( "fichero",
fichero_seleccionado );
const respuesta_cambiar = (await Castelog.metodos.una_peticion_http(`/api/v1/setfile/${this.tabla_id}`, "POST", datos_de_formulario, { "Content-Type":"multipart/form-data",
authorization:this.root.token_de_sesion
}, null, null));
if((!(this.$window.utilidades.gestion_de_error_desde_respuesta( respuesta_cambiar,
this )))) {

}
(await this.actualizar_imagen( columna_index ));
} catch(error) {
console.log(error);
throw error;
}

},
cargar_metadatos_de_tabla() {try {
this.tabla = this.root.esquema.filter( ( tabla ) => {try {
return tabla.tabla === this.tabla_id;
} catch(error) {
console.log(error);
throw error;
}

} )[ 0 ];
this.columnas_locales = ( () => {
try {
const columnas_locales = { 
};
for(let indice_componente = 0; indice_componente < this.tabla.composicion.length; indice_componente++) {const componente = this.tabla.composicion[ indice_componente ];
if(componente.sentencia === "columna") {
columnas_locales[ componente.columna ] = componente;
}}
return columnas_locales;
} catch(error) {
console.log(error);
throw error;
}
})();
this.columnas_foraneas = ( () => {
try {
const columnas_foraneas = { 
};
for(let indice_componente = 0; indice_componente < this.tabla.composicion.length; indice_componente++) {const componente = this.tabla.composicion[ indice_componente ];
if(componente.sentencia === "clave foránea") {
columnas_foraneas[ componente.columna ] = componente;
}}
return columnas_foraneas;
} catch(error) {
console.log(error);
throw error;
}
})();
this.columnas_fichero = ( () => {
try {
const columnas_fichero = { 
};
for(let indice_atributo = 0; indice_atributo < this.tabla.atributos.length; indice_atributo++) {const atributo = this.tabla.atributos[ indice_atributo ];
if(atributo.startsWith( "tiene_fichero:" )) {
const columna_fichero = atributo.substr( "tiene_fichero:".length ).trim(  );
columnas_fichero[ columna_fichero ] = 0;
}}
return columnas_fichero;
} catch(error) {
console.log(error);
throw error;
}
})();
} catch(error) {
console.log(error);
throw error;
}

},
desactualizar_imagen( columna_index ) {try {
this.columnas_fichero_cargando[ columna_index ] = true;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
actualizar_imagen( columna_index ) {try {
return new Promise( ( ok ) => {try {
setTimeout( () => {try {
this.columnas_fichero_cargando[ columna_index ] = false;
this.$forceUpdate( true );
return ok(  );
} catch(error) {
console.log(error);
throw error;
}

},
1000 );
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
async refrescar_imagen( columna_index ) {try {
(await this.desactualizar_imagen( columna_index ));
(await this.actualizar_imagen( columna_index ));
} catch(error) {
console.log(error);
throw error;
}

}
},
async beforeMount() {try {
this.cargar_metadatos_de_tabla(  );
} catch(error) {
console.log(error);
throw error;
}

},
async mounted() {try {
(await this.buscar_fila(  ));
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <div v-if=\"token_de_sesion\">"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </div>"
 + "    <div v-else>"
 + "      <PaginaDeLogin :root=\"this\" />"
 + "    </div>"
 + "    <PuertoDeNotificaciones :root=\"this\" />"
 + "  </div>",
  function(component) {return { data() {try {
return { esquema:undefined,
token_de_sesion:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/login",
name:"Login",
component:PaginaDeLogin,
props:{ 
}
},
{ path:"/explorador/:id_de_tabla",
name:"ExploradorDeDatosDeTabla",
component:PaginaDeExploradorDeDatosDeTabla,
props:{ 
}
},
{ path:"/formulario/:id_de_tabla/crear",
name:"FormularioDeDatoDeTabla",
component:PaginaDeFormularioDeDatoDeTabla,
props:{ modalidad:"crear"
}
},
{ path:"/formulario/:id_de_tabla/id/:id_de_fila",
name:"FormularioDeDatoDeTabla",
component:PaginaDeFormularioDeDatoDeTabla,
props:{ modalidad:"editar"
}
},
{ path:"/administracion",
name:"PanelDeAdministracion",
component:PaginaDePanelDeAdministracion,
props:{ 
}
},
{ path:"/configuraciones",
name:"PanelDeConfiguraciones",
component:PaginaDePanelDeConfiguraciones,
props:{ 
}
},
{ path:"/importar_exportar_datos",
name:"PaginaDeImportarExportarDatos",
component:PaginaDeImportarExportarDatos,
props:{ 
}
},
{ path:"/",
name:"Inicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");
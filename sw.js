/** @format */

// Ciclo de vida del SW
self.addEventListener('install', (event) => {
	// Descargar assets
	// Creamos un cache
	console.log('SW: Instalando SW!');

	const instalacion = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('SW: Instalaciones terminadas');
			self.skipWaiting();
			resolve();
		}, 100);
	});

	event.waitUntil(instalacion);
});

//Cuando el SW toma el control de la app.
self.addEventListener('activate', (event) => {
	// Borrar cache viejo
	console.log('SW: Activo y listo para controlar la app');
});

// Fetch: Manejo de peticiones HTTP
self.addEventListener('fetch', (event) => {
	//Aplicar estrategias del cache.
	console.log('SW:', event.request.url);

	// if (event.request.url.includes('https://reqres.in/')) {
	// 	const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);
	// 	event.respondWith(resp);
	// }
});

//Sync: Recuperamos la conexion a internet
self.addEventListener('sync', (event) => {
	console.log('Tenemos conexion!');
	console.log(event);
	console.log(event.tag);
});

//Push: Manejar las push notifications
self.addEventListener('push', (envet) => {
	console.log('Notificacion recibida');
});

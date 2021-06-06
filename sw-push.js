self.addEventListener('push', function(event) {

    console.info('Event: Push');
   
    var title = 'Тут новый пуш прилетел!';
   
    var body = {
      'body': 'Нажми сюда, чтобы открыть',
      'tag': 'pwa',
      'icon': './manifest/logo-pwa-48.png'
    };
   
    event.waitUntil(
      self.registration.showNotification(title, body)
    );
   });
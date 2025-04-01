// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    // Önce yükleniyor ekranını göster
    setTimeout(function() {
        // Sonra tabloyu kısa süreliğine göster
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('tableContent').classList.remove('hidden');
        
        // 2 saniye sonra şaka ekranını göster
        setTimeout(function() {
            document.getElementById('tableContent').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
            
            // Şakadan 2 saniye sonra footer'ı göster
            setTimeout(function() {
                document.getElementById('footer').classList.remove('hidden');
            }, 2000);
        }, 2000);
    }, 3000);
});
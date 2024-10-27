$(document).ready(function() {
    // Validasi form pendaftaran
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        // Ambil nilai input form
        var name = $('#name').val();
        var email = $('#email').val();
        var terms = $('#terms').is(':checked');

        // Validasi jika nama, email, atau terms belum terisi
        if (name === '' || email === '' || !terms) {
            $('#formFeedback')
                .removeClass('alert-success')
                .addClass('alert-danger')
                .text('Mohon lengkapi semua field dan setujui syarat dan ketentuan.')
                .fadeIn();
        } else {
            $('#formFeedback')
                .removeClass('alert-danger')
                .addClass('alert-success')
                .text('Terima kasih telah mendaftar, ' + name + '! Anda akan segera mendapatkan diskon.')
                .fadeIn();

            // Simulasi pengiriman data
            console.log('Form submitted:', { name: name, email: email });

            // Reset form setelah submit
            $('#registrationForm')[0].reset();
            setTimeout(() => {
                $('#formFeedback').fadeOut(); // Sembunyikan feedback setelah beberapa detik
            }, 3000);
        }
    });

    // Efek hover pada galeri bunga (zoom dan rotasi)
    $('.flower-item').hover(function() {
        $(this).find('.flower-img').css({
            'transform': 'scale(1.1) rotate(5deg)',
            'transition': 'all 0.4s ease'
        });
        $(this).find('p').css('color', '#ff4757');
    }, function() {
        $(this).find('.flower-img').css({
            'transform': 'scale(1)',
            'transition': 'all 0.4s ease'
        });
        $(this).find('p').css('color', '#2d3436');
    });

    // Animasi saat halaman dimuat
    $('.flower-item').hide().fadeIn(1000); // Animasi fade in untuk galeri bunga
    $('h1, h2, p').hide().slideDown(1000); // Animasi slide down untuk judul dan paragraf
});

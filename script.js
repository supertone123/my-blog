}, 5000); // 5 seconds
<script>
let index = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 5000);
</script>
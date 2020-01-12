//minimalny dystans, który myszka musi pokonać, by pojawił się pierwszy mark

tool.minDistance = 2;

var path;
$('.clear').click(function () {
	$('#logo').css('display', 'none');
	$('.container-fluid').addClass('bg-dark');
	pathColor = "#ffffff";
	$('.clear').css('display', 'none');
	$('.board').css('display', 'block');
	$('.brush-size').css('display', 'block');
	$('body').css(
		'background: none'
	)
})

function onMouseDown(event) {
	// dodaj segment w miejsce w które kliknąłeś
	path = new Path();
	path.strokeColor = $('#selectedColor').val();
	path.strokeWidth = $("#mySelect option:selected").val();
	path.strokeCap = 'round';
	path.add(event.point);

}

function onMouseDrag(event) {
	// za każdym pociągnięciem dodaje segment do pozycji w której znajduje się myszka
	path.add(event.point);
}

console.log('Website is working!')






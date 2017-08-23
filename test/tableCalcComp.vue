<template>
	<div class="container">
		<div class="span9">
		<table class="table table-bordered table-striped">
			<thead style="background-image: linear-gradient(0deg, #FEF2EA, #FFFFFF)"><th colspan="4">1 год использования</th></thead>
		<tbody>
		<tr>
			<td class="span4">Стоимость электоэнергии за 1 год, руб.</td>
			<td class="span2">{{ q }}</td>
			<td class="span2" :for="props">{{ props.property }}</td>
			<td class="span2">{{ dummy }}</td>
		</tr>
		 
		<tr>
			<td class="span4">Количество ламп под замену или условное количество ламп с 
				выработанным ресурсом за 1 год, шт.</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
		</tr>
		<tr>
			<td class="span4">Стоимость ламп под замену за 1 год (накопленная на замену ламп), руб.</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
		</tr>
		<tr>
			<td class="span4">Всего затрат за 1 год, руб.</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
		</tr>
		<tr>
			<td class="span4">СБЕРЕЖЕНИЯ ЗА 1 ГОД (по сравнению с лампами накаливания), руб.</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
			<td class="span2">{{ dummy }}</td>
		</tr>
		</tbody>
		</table>
		</div>
	</div>
</template>

<script lang="ts">
    import TableCalc from "./TableCalc";
    export default TableCalc;
</script>

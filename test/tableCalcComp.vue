<template>
	<div class="container">
		<div class="span12 table-bord-comp">
			<table class="table table-style">
				<thead><th colspan="4">{{ template }} использования</th></thead>
				<tbody>
					<tr>
						<td class="span6">Стоимость электроэнергии за {{ template }}, руб.</td>
						<td class="span2" v-for="item in costEnergyYear">{{ (item  * template.charAt(0)).toFixed(2)}}</td>
					</tr>
					<tr>
						<td class="span6">Количество ламп под замену или условное количество ламп с выработанным ресурсом за {{ template }}, шт.</td>
						<td class="span2" v-for="item in numberReplaceLamp">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
					<tr>
						<td class="span6">Стоимость ламп под замену за {{ template }} (накопления на замену ламп), руб.</td>
						<td class="span2" v-for="item in costNumberReplaceYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
					<tr>
						<td class="span6">Всего затрат за {{ template }}, руб.</td>
						<td class="span2" v-for="item in allCostYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
					</tr>
					<tr>
						<td class="span6" style="font-weight: bold">СБЕРЕЖЕНИЯ ЗА {{ template.toUpperCase() }} (по сравнению с лампами накаливания), руб.</td>
						<td class="span2" style="font-weight: bold" v-for="item in savingYear">{{ (item * template.charAt(0)).toFixed(2) }}</td>
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

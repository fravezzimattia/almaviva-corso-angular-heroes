export class HeroDto {
	public id: number;
	public name: string;
	public ability: string;

	constructor(obj: any) {
		this.id = obj.id;
		this.name = obj.name;
		this.ability = obj.ability;
	}
}
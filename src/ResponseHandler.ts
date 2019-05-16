interface ResponseHandler {

}

class Response {

	private resposne:object;

	public setResponse = function(response:object) {
		this.response = response;
	}

	public getResponse = function(): object {
		return this.reponse
	}
}
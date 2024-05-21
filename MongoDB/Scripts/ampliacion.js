const vecesReplicar = 500;


async function variacionAleatoriaTrastornos(valor) {
	const variacion = Math.floor(Math.random() * 5) -2;
	
	let nuevoValor = valor + variacion;
	
	if(nuevoValor < 0 || nuevoValor > 10) {
		return valor}else{return nuevoValor}
	
}


async function variacionAleatoriaFrecuencias(valor) {
	const variacion = Math.floor(Math.random() * 2) -1;
	
	let nuevoValor = valor + variacion;
	
	if(nuevoValor < 0 || nuevoValor > 3) {
		return valor}else{return nuevoValor}
	
}

async function replicarDocumentos() {
 
    const collection = db.mentalhealth_duplicated;
    const documentosOriginales = await collection.find({}).toArray();
    const totalDocumentosOriginales = documentosOriginales.length;

    let count = 0;

    for (const documento of documentosOriginales) {
      const documentoReplicado = { ...documento};
      for (let i = 0; i < vecesReplicar; i++) {
        documentoReplicado._id = new ObjectId();
		documentoReplicado.Anxiety = await variacionAleatoriaTrastornos(documento.Anxiety);
		documentoReplicado.Depression = await variacionAleatoriaTrastornos(documento.Depression);
		documentoReplicado.Insomnia = await variacionAleatoriaTrastornos(documento.Insomnia);
		documentoReplicado.OCD = await variacionAleatoriaTrastornos(documento.OCD);
		documentoReplicado["Frequency [Classical]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Classical]"]);
		documentoReplicado["Frequency [Country]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Country]"]);
		documentoReplicado["Frequency [EDM]"]= await variacionAleatoriaFrecuencias(documento["Frequency [EDM]"]);
		documentoReplicado["Frequency [Folk]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Folk]"]);
		documentoReplicado["Frequency [Gospel]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Gospel]"]);
		documentoReplicado["Frequency [Hip hop]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Hip hop]"]);
		documentoReplicado["Frequency [Jazz]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Jazz]"]);
		documentoReplicado["Frequency [K pop]"]= await variacionAleatoriaFrecuencias(documento["Frequency [K pop]"]);
		documentoReplicado["Frequency [Latin]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Classical]"]);
		documentoReplicado["Frequency [Lofi]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Latin]"]);
		documentoReplicado["Frequency [Metal]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Metal]"]);
		documentoReplicado["Frequency [Pop]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Pop]"]);
		documentoReplicado["Frequency [R&B]"]= await variacionAleatoriaFrecuencias(documento["Frequency [R&B]"]);
		documentoReplicado["Frequency [Rap]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Rap]"]);
		documentoReplicado["Frequency [Rock]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Rock]"]);
		documentoReplicado["Frequency [Video game music]"]= await variacionAleatoriaFrecuencias(documento["Frequency [Video game music]"]);
        await collection.insertOne(documentoReplicado);
        count++;
      }
    }
}


replicarDocumentos();

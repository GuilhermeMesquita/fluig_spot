const onloadFuncsCallbacks = () => {
    changeHelloTitle();
}

const getUsername = () => {
    let actualUser = getWKUser();
    let ds_colleague_c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", actualUser, actualUser, ConstraintType.MUST);
    let ds_colleague_constraints = [
        ds_colleague_c1
    ];
    let ds_colleague = DatasetFactory.getDataset("colleague", null, ds_colleague_constraints, null);
    let username = ds_colleague.values[0]["colleagueName"];
    return username;
}

const changeHelloTitle = () => {
    document.querySelector("#card-title-employee").innerHTML = `Olá, <b>${getUsername()}</b>, seja bem-vindo(a).`
}


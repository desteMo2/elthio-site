import elthio from '../elthio.png'
function InscrireFormulaire () {
    return (
            <div class ="container p-5 bg-success">
                <div class ="py-1 text-center">
                    <img class ="d-block mx-auto mb-4" src={elthio} alt="" width="150" height="150"/>
                    <h1>Elthio</h1>
                </div>

                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted"></span>
                            <button class="badge badge-secondary badge-pill">Parcours Professionnel</button>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Université</h6>
                                    <small class="text-muted">...</small>
                                </div>
                                <span class="text-muted">2021</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Année Preparatoire</h6>
                                    <small class="text-muted">..</small>
                                </div>
                                <span class="text-muted">2020</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">BACCALAURÉAT Série C</h6>
                                    <small>Lycée ...</small>
                                </div>
                                <span class="text-success">2019</span>
                            </li>
                        </ul>

                        <div class ="card p-2">
                            <div class ="input-group">
                                <input type="text" class="form-control" placeholder="Parcours"/>
                                <div class ="input-group-ap1pend">
                                    <button type="submit" class="btn btn-secondary">Ajouté</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class ="col-md-8 order-md-1">
                        <h4 class  ="mb-3">Inscription</h4>

                        <hr class="mb-4"/>

                        <div class ="needs-validation" novalidate>
                            <div class ="row">
                                <div class ="col-md-6 mb-3">
                                    <label for="firstName">Nom</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" required/>
                                </div>

                                <div class ="col-md-6 mb-3">
                                    <label for="lastName">Prénom</label>
                                    <input type="text" class   ="form-control" id="lastName" placeholder="" required/>
                                </div>
                            </div>

                            <div class ="mb-3">
                                <label for="username">Pseudo</label>
                                
                                <div class ="input-group">
                                    <div class ="input-group-prepend">
                                        <span class="input-group-text">@</span>
                                    </div>
                                    <input type="text" class   ="form-control" id="pseudo" placeholder="pseudo" required/>
                                </div>
                            </div>

                            <div class ="mb-3">
                                <label for="email">Email <span class   ="text-muted">(Optionnelle)</span></label>
                                <input type="email" class  ="form-control" id="email" placeholder="nom@exemple.com"/>
                            </div>

                            <div class ="mb-3">
                                <label for="address">Adresse</label>
                                <input type="text" class="form-control" id="adresse" placeholder="VI Ambatoroka" required/>
                            </div>  

                            <div class="row">
                                <div class ="col-md-5 mb-3">
                                    <label for="zip">Date de naissance</label>
                                    <input type="date" class="form-control" id="dateDeNaissance" placeholder="" required/>
                                </div>
                                
                                <div class="col-md-5 mb-3">
                                    <label for="ville">Ville d'origine</label>
                                    <select class="custom-select d-block w-100" id="origine" required>
                                        <option value="">Choose...</option>
                                        <option>Antananarivo</option>
                                    </select>
                                </div>

                                <div class ="col-md-5 mb-3">
                                    <label for="domaineTravail">Domaine de travail</label>
                                    <select class="custom-select d-block w-100" id="domaineTravail" required>
                                        <option value="">Choose...</option>
                                        <option>Informatique</option>
                                    </select>
                                </div>
                            </div>

                            <hr class="mb-4"/>
                            <h4 class  ="mb-3">Sexe</h4>

                            <div class ="d-block my-3">
                                <div class ="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" class ="custom-control-input" checked required/>
                                    <label class   ="custom-control-label" for="credit">Homme</label>
                                </div>
                                <div class ="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" class  ="custom-control-input" required/>
                                    <label class   ="custom-control-label" for="debit">Femme</label>
                                </div>
                                <div class ="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" class ="custom-control-input" required/>
                                    <label class   ="custom-control-label" for="paypal">Autre</label>
                                </div>
                            </div>

                            <hr class="mb-4"/>

                            <div class ="row">
                                <div class ="col-md-8 mb-3">
                                    <label for="motDePasse">Téléphone</label>
                                    <input type="password" class="form-control" id="phone" placeholder="" required/>
                                </div>
                            </div>
                            
                            <hr class="mb-4"/>

                            <div class ="row">
                                <div class ="col-md-8 mb-3">
                                    <label for="motDePasse">Mot de passe</label>
                                    <input type="password" class="form-control" id="motDePasse" placeholder="" required/>
                                </div>
                            </div>

                            <div class="row">
                                <div class ="col-md-8 mb-3">
                                    <label for="motDePasseC">Confirmer mot de passe</label>
                                    <input type="password" class="form-control" id="motDePasseC" placeholder="" required/>    
                                </div>
                            </div>
                        </div>

                        <hr class  ="mb-4"/>
                        
                        <button class  ="btn btn-primary btn-lg btn-block" type="submit">Continue</button>
                    </div>
                </div>
            </div>
    )
}

export default InscrireFormulaire;
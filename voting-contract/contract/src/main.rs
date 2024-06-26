#![no_std]
#![no_main]
#[cfg(not(target_arch = "wasm32"))]
compile_error!("target arch should be wasm32: compile with '--target wasm32-unknown-unknown'");
extern crate alloc;
use alloc::{
    string::{String, ToString},
    vec,
    vec::Vec,
};
use casper_contract::{
    contract_api::{runtime, storage},
    unwrap_or_revert::UnwrapOrRevert,
};
use casper_types::{contracts::NamedKeys, ApiError, Key, URef, EntryPoints, EntryPoint, Parameter, RuntimeArgs, EntryPointAccess, EntryPointType, U256, CLType};
const VOTES_DICT_NAME: &str = "votes";
const CHOICE_A: &str = "choice_A";
const CHOICE_B: &str = "choice_B";

#[no_mangle]
pub extern "C" fn vote(){
    let choice: String = runtime::get_named_arg("choice");
    let A_uref: URef = match runtime::get_key(CHOICE_A){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();
    let B_uref: URef = match runtime::get_key(CHOICE_B){
        Some(key) => key,
        None => runtime::revert(ApiError::MissingKey)
    }.into_uref().unwrap_or_revert();

    if choice == CHOICE_A{
        let mut A_votes: U256 = storage::read_or_revert(A_uref);
        A_votes += U256::from(1);
        storage::write(A_uref, A_votes);
    }
    else if choice == CHOICE_B{
        let mut B_votes: U256 = storage::read_or_revert(B_uref);
        B_votes += U256::from(1);
        storage::write(B_uref, B_votes)
    }
    else{
        runtime::revert(ApiError::Unhandled)
    }
}

#[no_mangle]
pub extern "C" fn call() {
    let mut entry_points = EntryPoints::new();
    let vote = EntryPoint::new(
        "vote",
        vec![Parameter::new("choice", CLType::String)],
        CLType::Unit,
        EntryPointAccess::Public,
        EntryPointType::Contract
    );
    entry_points.add_entry_point(vote);
    
    let named_keys = {
        let mut named_keys = NamedKeys::new();
       

        // For now - 2 simple options
        let A_uref = storage::new_uref(CHOICE_A);
        let B_uref = storage::new_uref(CHOICE_B);
        named_keys.insert(CHOICE_A.to_string(), A_uref.into());
        named_keys.insert(CHOICE_B.to_string(), B_uref.into());
        storage::write(A_uref, U256::from(0));
        storage::write(B_uref, U256::from(0));
        named_keys
    };

    storage::new_contract(
        entry_points,
        Some(named_keys),
        Some("Voting contract".to_string()),
        Some("Voting access key".to_string())
    );
}

#![cfg_attr(not(feature = "export-abi"), no_main, no_std)]
extern crate alloc;

use crate::erc20::{Erc20, Erc20Params};
use alloc::{string::String, vec::Vec};
use stylus_sdk::{alloy_primitives::U256, call, msg, prelude::*};

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

mod erc20;

struct VaultParams;

/// Immutable definitions
impl Erc20Params for VaultParams {
    const NAME: &'static str = "Vault Example";
    const SYMBOL: &'static str = "VAULT";
    const DECIMALS: u8 = 18;
}

// The contract
sol_storage! {
    #[entrypoint] // Makes Vault the entrypoint
    struct Vault {
        #[borrow] // Allows erc20 to access Vault's storage and make calls
        Erc20<VaultParams> erc20;
    }
}

#[external]
#[inherit(Erc20<VaultParams>)]
impl Vault {
    #[payable]
    pub fn deposit(&mut self, amount: U256) -> Result<(), Vec<u8>> {
        self.erc20.mint(msg::sender(), amount);
        Ok(())
    }

    pub fn withdraw(&mut self, amount: U256) -> Result<(), Vec<u8>> {
        self.erc20.burn(msg::sender(), amount)?;
        call::transfer_eth(msg::sender(), amount)
    }
}
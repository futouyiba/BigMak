// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "JsEnv.h"

#include "CoreMinimal.h"
#include "UObject/Object.h"
#include "BigMakGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class BIGMAK_API UBigMakGameInstance : public UGameInstance
{
	GENERATED_BODY()
public:

	virtual void Init() override;

	virtual void OnStart() override;

	virtual void Shutdown() override;
	
private:
	TSharedPtr<puerts::FJsEnv> GameScript;
};
